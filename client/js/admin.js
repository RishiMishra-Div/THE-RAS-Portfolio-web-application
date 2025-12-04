
        // logout
        document.getElementById('logout-btn').addEventListener('click', () => {
            const res = fetch(`${API_URL}/api/admin/adminLogout`, {
                method: 'POST',
                credentials: 'include'
            });
            window.location.href = '/login.html';
        });




        // Tab Switching
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
            });
        });


        let editorInstance = null;
        
        // Modal elements
        const modal = document.getElementById("project-modal");
        const projectForm = document.getElementById("project-form");
        const addProjectBtn = document.getElementById("add-project-btn");
        const closeModalBtn = document.getElementById("close-modal");
        
        // Create markdown editor only once
        function loadMarkdownEditor() {
            if (!editorInstance) {
                editorInstance = new SimpleMDE({
                    element: document.getElementById("editor"),
                    spellChecker: false,
                    placeholder: "Write detailed project description here..."
                });
        
                // Live preview sync
                editorInstance.codemirror.on("change", () => {
                    document.getElementById("preview").innerHTML = marked.parse(editorInstance.value());
                });
            }
        }
        
        // Open modal with add / edit mode
        function openModal(mode, project = null) {
        
            // Load editor only now (NOT on page load)
            loadMarkdownEditor();
        
            document.getElementById("modal-title").textContent =
                mode === "edit" ? "Edit Project" : "Add Project";
        
            if (project) {
                // Editing: fill values
                document.getElementById("project-id").value = project._id;
                document.getElementById("p-title").value = project.title;
                document.getElementById("p-desc").value = project.description;
                document.getElementById("p-tech").value = project.techStack.join(", ");
                document.getElementById("p-image").value = project.imageUrl;
                document.getElementById("p-githublink").value = project.githubLink;
        
                editorInstance.value(project.markdown || "");
                document.getElementById("preview").innerHTML = marked.parse(project.markdown || "");
        
            } else {
                // New project: reset everything
                projectForm.reset();
                editorInstance.value("");
                document.getElementById("preview").innerHTML = "Start typing to see preview...";
                document.getElementById("project-id").value = "";
            }
        
            modal.classList.add("active");
        }
        
        // Close modal
        function closeModal() {
            modal.classList.remove("active");
        }


        // Save form
       projectForm.addEventListener("submit", async (e) => {
            e.preventDefault();
        
            const projectId = document.getElementById("project-id").value;
        
            const newProjectData = {
                title: document.getElementById("p-title").value.trim(),
                description: document.getElementById("p-desc").value.trim(),
                markdown: editorInstance.value(),
                techStack: document.getElementById("p-tech").value.split(",")
                    .map(item => item.trim())
                    .filter(Boolean),
                imageUrl: document.getElementById("p-image").value || "https://via.placeholder.com/600x400",
                githubLink: document.getElementById("p-githublink").value || ""
            };
        
            try {
                const url = projectId ? `${API_URL}/api/projects/${projectId}` : `${API_URL}/api/projects`;
                const method = projectId ? "PUT" : "POST";
        
                const res = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newProjectData)
                });
        
                if (!res.ok) throw new Error("Failed request");
        
                alert(projectId ? "Project Updated Successfully" : "Project Added Successfully");
        
                closeModal();
                loadProjects();
        
            } catch (error) {
                console.error(error);
                alert("Something went wrong!");
            }
        });
        
        
        // Button events
        addProjectBtn.addEventListener("click", () => openModal("add"));
        closeModalBtn.addEventListener("click", closeModal);
        
        // Close when clicking outside modal box
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
        

        // Load projects

       async function loadProjects() {
            const res = await fetch(`${API_URL}/api/projects`);
            const projects = await res.json();
        
            const projectsContainer = document.getElementById("admin-projects");
            projectsContainer.innerHTML = projects.map(p => `
                <div class="project-card">
            
                    <img src="${p.imageUrl}" class="project-thumb" />
            
                    <div class="project-content">
                        <h2 class="project-title">${p.title}</h2>
                        <p class="project-desc">${p.description}</p>
                        <p class="project-tech">${p.techStack.join(", ")}</p>
            
                        <div class="project-buttons">
                            <button class="edit-btn" onclick='openModal("edit", ${JSON.stringify(p)})'>
                                <i data-lucide="edit"></i> Edit
                            </button>
                            <button class="delete-btn" onclick="deleteProject('${p._id}')">
                                <i data-lucide="trash"></i> Delete
                            </button>
                        </div>
                    </div>
            
                </div>
            `).join('');

            
            lucide.createIcons();
        }

        // --------------------------- Load Messages-----------------------------

         let GLOBAL_MESSAGES = [];
         let SELECTED_MESSAGE = null;

        async function loadMessages() {
        GLOBAL_MESSAGES = await fetch(`${API_URL}/api/contact`).then(res => res.json());
            
                renderMessages();
            }
            
            function renderMessages() {
                const searchValue = document.getElementById("searchMessages").value.toLowerCase();
                const sortValue = document.getElementById("sortMessages").value;
            
                let filtered = GLOBAL_MESSAGES
                    .filter(m => m.name.toLowerCase().includes(searchValue) || m.email.includes(searchValue) || m.message.toLowerCase().includes(searchValue));
            
                if (sortValue === "latest") filtered.reverse();
            
                document.getElementById("message-count").innerText = filtered.length;
            
                const container = document.getElementById("admin-messages");
            
                container.innerHTML = filtered.map(m => `
                    <div class="message-item ${m.status === 'unread' ? 'unread' : ''}" 
                         data-id="${m._id}">
                        <div class="message-name">${m.name}</div>
                        <div class="message-email">${m.email}</div>
                        <div class="message-short">${m.message}</div>
                    </div>
                `).join("");
            
                addMessageClickEvents();
            }
            
            function addMessageClickEvents(){
                document.querySelectorAll(".message-item").forEach(item => {
                    item.addEventListener("click", () => {
                        const id = item.dataset.id;
                        SELECTED_MESSAGE = GLOBAL_MESSAGES.find(m => m._id === id);
            
                        item.classList.remove("unread");
                        SELECTED_MESSAGE.status = "read";
            
                        showPreview();
                    });
                });
            }
            
            function showPreview(){
                const preview = document.getElementById("message-preview");
                const m = SELECTED_MESSAGE;
            
                preview.classList.remove("empty");
            
                preview.innerHTML = `
                    <h2>${m.name}</h2>
                    <p class="text-primary">${m.email}</p>
                    <small>${new Date(m.createdAt).toLocaleString()}</small>
                    <hr style="margin:15px 0;">
                    <p>${m.message}</p>
                    <br>
                    <button class="btn btn-primary" onclick="replyMessage('${m.email}')"><i data-lucide="mail"></i> Reply</button>
                    <button class="btn btn-danger" onclick="deleteMessage('${m._id}')"><i data-lucide="trash"></i> Delete</button>
                    <button class="btn btn-outline" onclick="markUnread('${m._id}')"><i data-lucide="eye-off"></i> Mark Unread</button>
                `;
            }
            
            document.getElementById("searchMessages").addEventListener("input", renderMessages);
            document.getElementById("sortMessages").addEventListener("change", renderMessages);
            


    
    //   Delete project
        async function deleteProject(id) {
            if (confirm("Are you sure?")) {
               await fetch(`${API_URL}/api/projects/${id}`, { method: "DELETE" });
               loadProjects();
            }
        }





        // Init
        document.addEventListener('DOMContentLoaded', () => {
            loadProjects();
            loadMessages();
        });

        // Message actions

        function replyMessage(email){
            window.location.href = `mailto:${email}`;
        }
        
        async function deleteMessage(id){
            if(confirm("Delete message?")){
                await fetch(`${API_URL}/api/contact/${id}`, { method:"DELETE" });
                loadMessages();
            }
        }
        
        function markUnread(id){
            const msg = GLOBAL_MESSAGES.find(m => m._id === id);
            msg.status = "unread";
            renderMessages();
        }
        
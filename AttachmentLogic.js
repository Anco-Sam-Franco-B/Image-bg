const attachmentInput = document.getElementById("attachmentInput");
const attachBtn = document.getElementById("attachBtn");
const previewContainer = document.getElementById("attachmentPreview");
const progressBar = document.getElementById("progressBar");
const uploadProgress = document.getElementById("uploadProgress");
const form = document.querySelector("form");

attachBtn.addEventListener("click", () => {
  attachmentInput.click();
});

attachmentInput.addEventListener("change", () => {
  previewContainer.innerHTML = "";

  Array.from(attachmentInput.files).forEach(file => {
    const fileType = file.type;
    const fileURL = URL.createObjectURL(file);

    const wrapper = document.createElement("div");
    wrapper.className = "bg-black/40 p-2 rounded-lg text-xs w-24 text-center";

    if (fileType.startsWith("image/")) {
      wrapper.innerHTML = `
        <img src="${fileURL}" class="w-full h-16 object-cover rounded mb-1" />
        <p class="truncate">${file.name}</p>
      `;
    } 
    else if (fileType.startsWith("video/")) {
      wrapper.innerHTML = `
        <video src="${fileURL}" class="w-full h-16 object-cover rounded mb-1"></video>
        <p class="truncate">${file.name}</p>
      `;
    } 
    else {
      wrapper.innerHTML = `
        <i class="fa-solid fa-file text-2xl mb-1"></i>
        <p class="truncate">${file.name}</p>
      `;
    }

    previewContainer.appendChild(wrapper);
  });
});

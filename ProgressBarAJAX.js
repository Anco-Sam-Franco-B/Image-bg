form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/emails/send", true);

  uploadProgress.classList.remove("hidden");

  xhr.upload.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
      const percent = (e.loaded / e.total) * 100;
      progressBar.style.width = percent + "%";
    }
  });

  xhr.onload = function () {
    if (xhr.status === 200) {
      progressBar.style.width = "100%";
      setTimeout(() => {
        uploadProgress.classList.add("hidden");
        progressBar.style.width = "0%";
        previewContainer.innerHTML = "";
        form.reset();
        alert("Email sent successfully");
      }, 500);
    }
  };

  xhr.send(formData);
});

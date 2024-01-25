function deleteLocalStorage() {
    let confirmation = confirm("Are you sure you want to delete all local storage? This will reset everything you have done on this website.")

    if (confirmation) {
        localStorage.clear();
        alert("All local storage has been deleted!")
    } else {
        alert("Local storage deletion has been canceled.")
    }
}
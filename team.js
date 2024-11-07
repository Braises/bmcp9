document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll(".team-member");
    const teamLeft = document.querySelector(".team-left");
    const teamRight = document.querySelector(".team-right");
    const totalMembers = teamMembers.length;
    let currentIndex = 0;

    function updateTeamFocus() {
        teamMembers.forEach((member, index) => {
            member.classList.remove("focused");
            if (index === currentIndex) {
                member.classList.add("focused");
                showMemberInfo(member);
            }
        });
    }

    function showMemberInfo(member) {
        const name = member.getAttribute("data-name");
        const role = member.getAttribute("data-role");
        if (!member.querySelector(".member-info")) {
            const infoDiv = document.createElement("div");
            infoDiv.classList.add("member-info");
            infoDiv.innerHTML = `<h3>${name}</h3><p>${role}</p>`;
            member.appendChild(infoDiv);
        }
    }

    function slideToLeft() {
        currentIndex = currentIndex === 0 ? totalMembers - 1 : currentIndex - 1;
        updateTeamFocus();
    }

    function slideToRight() {
        currentIndex = currentIndex === totalMembers - 1 ? 0 : currentIndex + 1;
        updateTeamFocus();
    }

    teamLeft.addEventListener("click", slideToLeft);
    teamRight.addEventListener("click", slideToRight);

    // Initial display
    updateTeamFocus();
});


document.querySelectorAll(".container__cardlist").forEach(
    (card_list) => {
        
        card_list.addEventListener("mouseover",
            (event) => {
                target = event.target.closest(".renewcard");
        
                if(target != null)
                {
                    target.classList.add("shadow-hover")
                }
            }
        )

        card_list.addEventListener("mouseout",
            (event) => {
                target = event.target.closest(".renewcard");

                if(target != null)
                {
                    target.classList.remove("shadow-hover");
                }
            }
        )
        
    }
)

document.querySelectorAll(".notification").forEach(
    (notification) => {
        notification.querySelector(".btn-cancel").addEventListener("click",
            function () {
                notification.classList.add("inactive");
            }
        ) 
    }
)

document.querySelectorAll(".inputnode").forEach(
    (input_node) => {
        input = input_node.querySelector("input");
        close_btn = input_node.querySelector("button");

        close_btn.addEventListener("click", 
            function () {
                input.value = '';
                close_btn.classList.add("inactive");
            }
        )

        input.addEventListener("input",
            function () {
                if(input.value.length == 0) {
                    close_btn.classList.add("inactive");
                }
                else {
                    close_btn.classList.remove("inactive");
                }
            }
        )

        input.addEventListener("focusin",
            function () {
                input_node.classList.add("inputnode--active");
            }
        );

        input.addEventListener("focusout",
            function () {
                input_node.classList.remove("inputnode--active");
            }
        );
    }
)

function ActiveInputButton (input_id,btn_id) {
    input_node = document.getElementById(input_id);
    close_btn = input_node.querySelector("button");
    target_btn = document.getElementById(btn_id);

    close_btn.addEventListener("click", 
        function () {
            target_btn.classList.remove("sidecontainer__btn--active");
        }
    )

    input_node.querySelector("input").addEventListener("input",
        function () {

            if(input.value.length == 0) {
                target_btn.classList.remove("sidecontainer__btn--active");
            }
            else {
                target_btn.classList.add("sidecontainer__btn--active");
            }
        }
    )
}

ActiveInputButton("discount-code-input","apply-code-btn");
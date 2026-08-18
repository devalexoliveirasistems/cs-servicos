import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://pvhsfrawvgrhnrvrhtrm.supabase.co";

const SUPABASE_KEY = "sb_publishable_bPlKB90OXrDhP90InxLZ-Q_RiVFzNSu";

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    loginMessage.textContent = "Entrando...";

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {

        loginMessage.textContent =
            "E-mail ou senha incorretos.";

        return;
    }

    loginMessage.textContent =
        "Login realizado!";

    window.location.href = "dashboard.html";

});

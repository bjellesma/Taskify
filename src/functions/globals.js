export function destroy_messages(){
    document.querySelectorAll(".flash__message").forEach(e => e.parentNode.removeChild(e));
}
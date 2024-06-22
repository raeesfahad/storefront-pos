import { writable } from "svelte/store";
import { supabase_auth } from "../lib/functions/supbase";
import { replace } from "svelte-spa-router";

export const user = writable();
export const session = writable()
export const error_message_auth = writable();
export const error_state_auth = writable(false);
export const isLoggedIn = writable(false);
export const loading_state_auth = writable(false);

export async function LoginFunction(email, password) {
  loading_state_auth.set(true);
  const { data, error } = await supabase_auth.auth.signInWithPassword({
    email,
    password,
  });

  if (!error) {
    loading_state_auth.set(false);
    user.set(data.user);
    session.set(data.session);
    isLoggedIn.set(true);
    error_state_auth.set(false);
  } else if (error) {
    loading_state_auth.set(false);
    isLoggedIn.set(false);
    error_message_auth.set(error.message);
    error_state_auth.set(true);
  }
}

export async function logout() {
  isLoggedIn.set(false);
  replace("/login");
}

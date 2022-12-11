import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://wkfyylikkabmmhjokled.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZnl5bGlra2FibW1oam9rbGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNzU4MTYsImV4cCI6MTk4Mzk1MTgxNn0.vR0rHn0Vy_X7vvdSl__TIhJbG7LAHr_yT8M1ou_vBSU";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function VideoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");

        }
    }
}
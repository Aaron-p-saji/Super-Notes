// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::{collections::HashMap, iter::Product};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
struct Note {
    name: String,
    title: String,
}

#[derive(Serialize, Deserialize, Debug)]
struct Response {
    name: String,
}




fn main() {
    tauri::Builder::default()
        // .invoke_handler(tauri::generate_handler![get_notes])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct NotesDB {
    pub id: String,
    pub title: String,
    pub notes: String
}
import { captureOwnerStack } from "react";
import note from "../models/note.js";

export const getAllnotes= async (req, res)=>{
    try {
        const notes = await note.find();
    res.status(200);
    res.json(notes);
}
catch(error){
    console.log(error.message);
    res.status(500).json({message: error.message});

}
};

export const createnote=async (req,res) => {
    try{
        const{title,content}=req.body
        const newNote=new note({title,content})
        await newNote.save()
        res.status(201).json(newNote)

    }
    catch(error){
    console.log(error.message);
    res.status(500).json({message: error.message});
}
}
export const updatebyid= async (req,res)=>{
 try{   
            const{title,content}=req.body
const note = await note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200);
    res.json(note);  }
catch{

}
}
export const deletebyid = async (req,res)=>{
    const note = await note.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json(note);
}

export const addbyid= async (req,res)=>{
    const newNote = new note(req.body);
    const savedNote = await newNote.save();
    res.status(201);
    res.json(savedNote);
}
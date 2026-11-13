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
export const getbyid= async (req,res)=>{
    try{
        const notebyid = await note.findById(req.params.id);
        if (!notebyid) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json(notebyid);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createnote=async (req,res) => {
    try{
        const{title,content}=req.body
        const newNote=new note({title,content} , { new: true });
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
            const{title,content}=req.body;
const noteupdated = await note.findByIdAndUpdate(req.params.id, {title,content}, { new: true });
    if (!noteupdated) {
        return res.status(404).json({ message: "Note not found" });
    }
        res.status(201);
    res.json({message: "updated successfully", note: noteupdated});  }

catch(error){
    console.error(error.message);
    res.status(500).json({message: error.message});

}
}



export const deletebyid = async (req,res)=>{
    const notedeleted = await note.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json({message: "deleted successfully"});
    res.json(notedeleted);
}


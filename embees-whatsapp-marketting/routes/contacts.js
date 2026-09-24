
import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async(req,res)=>{
    try{
        const [contacts] = await db.query("SELECT * FROM contacts");
        res.json(contacts);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error" });
    }
});

export default router;
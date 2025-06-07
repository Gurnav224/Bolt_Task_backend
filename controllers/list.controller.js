

import { List } from "../models/list.model.js";


export const createList = async (req, res) => {
    try {

        const { name, color, icon } = req.body;
        // Validate required fields
        if (![name, color, icon].every(Boolean)) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // Check if list with the same name already exists
        const existingList = await List.findOne({ name });
        if (existingList) {
            return res.status(400).json({ message: "List with this name already exists" }); 
        }
        const newList = new List({ name, color, icon });
        await newList.save();
        res.status(201).json(newList);
    } catch (error) {
        res.status(500).json({ message: "Error creating list", error: error.message });
    }
}

export const getAllLists = async (req, res) => {
    try {
        const lists = await List.find();
        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({ message: "Error fetching lists", error: error.message });
    }
}



import User from "../models/users";
import { RequestHandler } from "express";
import { nextTick } from "process";

export const addUser: RequestHandler = async (req, res, next) => {
    const user = new User({
        name: req.body.name,
        active: req.body.active,
        age: req.body.age,
    });
    try {
        const newUser = await user.save();
        res.json(newUser);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const getUsers: RequestHandler = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const getUser: RequestHandler<{ id: string }> = async (
    req,
    res,
    next
) => {
    try {
        const userId = await User.findById(req.params.id);
        res.json(userId);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const deleteUser: RequestHandler<{ id: string }> = async (
    req,
    res,
    next
) => {
    try {
        const userId = await User.findByIdAndDelete(req.params.id);
        res.json(userId);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

export const patchUser: RequestHandler<{ id: string }> = async (
    req,
    res,
    next
) => {
    try {
        const userId = await User.updateMany(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    active: req.body.active,
                    age: req.body.age,
                },
            }
        );
        res.json(userId);
    } catch (err) {
        res.json({ message: err }).status(400);
    }
};

import animalModel from "../models/animal.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


//Add Animal for Adoption
export const addAnimal = asyncHandler(async (req, res) => {
    console.log(req.body);
    const animal = await animalModel.create(req.body)

    if (!animal)
        throw new ApiError(500, "internal server error ")
    res.status(201).json(new ApiResponse(201, animal, "Animal registered Successfully"))

})

export const getAllAnimal = asyncHandler(async (req, res) => {
    const animals = await animalModel.find()
    if (animals)
        res.status(201).json(new ApiResponse(200, animals, "Animals fetch Successfully"))
    throw new ApiError(500, "internal server error")
})

export const getRescuedAnimal = asyncHandler(async (req, res) => {
    const animals = await animalModel.find({ State: "Patient" })
    if (!animals)
        throw new ApiError(500, "Internal Server Error")
    return res.status(200).json(
        new ApiResponse(200, animals)
    )

})
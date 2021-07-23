import {_api} from "./api"

export const workoutPoint = (data) => _api.post ('/workout/create-workout',data);
import { id } from "date-fns/locale";
import BackendService from "./BackendService";

//to get all districts
const getDistricts = async () => {
  return BackendService.get(`districts/`);
};
//to get all turfs
const getTurfs = async (id) => {
  return BackendService.get(`turfs/bydistrict/${id}`);
};

//to view turf
const getTurfDetails = async (id) => {
return BackendService.get(`turfs/${id}`);
};

//add personal details
const addPersonalDetails = async () => {
  return BackendService.post(`personalDetails/`);
};

//to get personal details
const getPersonalDetails = async (id) => {
  return BackendService.get(`personalDetails/${id}`);
};

//edit personal details
const updatePersonalDetails = async (id) => {
  return BackendService.patch(`addPersonalDetails/${id}`);
};

const turfService = {
  getDistricts,
  getTurfs,
  getPersonalDetails,
  addPersonalDetails,
  updatePersonalDetails,
  getTurfDetails,

};
export default turfService;

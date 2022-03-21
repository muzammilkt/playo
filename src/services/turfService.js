import { id } from "date-fns/locale";
import BackendService from "./BackendService";

//get all districts
const getDistricts = async () => {
  return BackendService.get(`districts/`);
};

//add turf
const AddTurfDetails = async (data) => {
return BackendService.post(`turfs/` , data);
};

//get all turfs
const getTurfs = async (id) => {
  return BackendService.get(`turfs/bydistrict/${id}`);
};

//view turf
const getTurfDetails = async (id) => {
return BackendService.get(`turfs/${id}`);
};

//add personal details
const addPersonalDetails = async (data) => {
  return BackendService.post("personalDetails/" , data);
};

//get personal details
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
  AddTurfDetails

};
export default turfService;

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

//edit turf details
const EditTurfDetails = async(id) => {
  return BackendService.patch(`turfs/${id}`);
};

//get all turfs
const getTurfs = async (id) => {
  return BackendService.get(`turfs/bydistrict/${id}`);
};

//view turf by owner id
const getTurfDetails = async (id) => {
return BackendService.get(`turfs/byuser/${id}`);
};

//get turf data by turf id for editing
const getTurfDetailsById = async (id) => {
  return BackendService.get(`turfs/${id}`);
};






//get personal details
const getPersonalDetails = async (id) => {
  return BackendService.get(`personalDetails/${id}`);
};

//add personal details
const addPersonalDetails = async (data) => {
  return BackendService.post("personalDetails/" , data);
};

//edit personal details
const editPersonalDetails = async (id , data) => {
  return BackendService.patch(`personalDetails/${id}` , data);
};



const turfService = {
  getDistricts,
  getTurfs,
  getPersonalDetails,
  addPersonalDetails,
  getTurfDetails,
  AddTurfDetails,
  EditTurfDetails,
  editPersonalDetails,
  getTurfDetailsById,
  

};
export default turfService;

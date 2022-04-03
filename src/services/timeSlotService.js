import BackendService from "./BackendService";

//get all districts
const getTimeSlots = async (id) => {
  return BackendService.get(`timeSlots/${id}`);
};

const TimeSlotService = {
    getTimeSlots
    
  };
  export default TimeSlotService;

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 27e87f6545b2775a50365c4c9628a48fdc56e8eefa05e8a2a5e54f8fb36cc330"
  }
});

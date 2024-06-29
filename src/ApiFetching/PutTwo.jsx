import axios from "axios";
import { useEffect } from "react";

export default function PutTwo() {
  useEffect(() => {
    axios
      .put("https://reqres.in/api/users/2", {
        name: "twana",
        job: "programmer",
      })
      .then((res) => console.log(res));
  }, []);
}

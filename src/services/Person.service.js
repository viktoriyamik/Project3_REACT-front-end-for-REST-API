import http from "../http-common";

class PersonDataService {
  getAll() {
    return http.get("/getall");
  }

  get(id) {
    return http.get(`/${id}`);
  }

  create(data) {
    return http.post("/add", data);
  }

  update(id, data) {
    return http.patch(`/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }

  findByName(name) {
    return http.get(`/person?name=${name}`);
  }
}

export default new PersonDataService();
import Ajax from './ajax';

const Request = {
  P: {
    get(id) {
      return Ajax.get("/poetry", {id})
    },
    create(param) {
      return Ajax.postJson("/poetry", param)
    },
    update(id, param) {
      return Ajax.postJson(`/poetry/${id}`, param)
    }
  }
};

module.exports = Request;

import { contactService } from "../services/contact.service.js";

export const contactStore = {
  state: {
    contacts: [],
    lastRemovedContact: null,
  },
  getters: {
    contacts({ contacts }) {
      return contacts;
    },
  },
  mutations: {
    setContacts(state, { contacts }) {
      // console.log('payload: ', payload)
      state.contacts = contacts;
    },
    removeContact(state, { contactId }) {
      const idx = state.contacts.findIndex((c) => c._id === contactId);
      state.lastRemovedContact = state.contacts[idx];
      state.contacts.splice(idx, 1);
    },
    addContact(state, { contact }) {
      state.contacts.push(contact);
    },
    updateContact(state, { contact }) {
      const idx = state.contacts.findIndex((c) => c._id === contact._id);
      state.contacts.splice(idx, 1, contact);
    },
    clearRemoveContact(state) {
      state.lastRemovedContact = null;
    },
    undoRemoveContact(state) {
      state.contacts.unshift(state.lastRemovedContact);
      state.lastRemovedContact = null;
    },
  },
  actions: {
    loadContacts({ commit }) {
      contactService.query().then((contacts) => {
        commit({ type: "setContacts", contacts });
      });
    },
    async removeContact({ commit }, payload ) {
        //Dont understand this line
      commit(payload);
      try {
        await contactService.remove(payload.contactId);
        commit({ type: "clearRemoveContact" });
      } catch (err) {
        commit({ type: "undoRemoveContact" });
        throw err;
      }
    },
    async saveContact({ commit }, { contact }) {
      const actionType = contact._id ? "updateContact" : "addContact";
      try {
        const savedContact = await contactService.save(contact);
        commit({ type: actionType, contact: savedContact });
        return savedContact;
      } catch (err) {
        console.log("err", err);
        throw err;
      }
    },
  },
};

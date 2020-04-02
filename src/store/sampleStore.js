import {action, observable} from "mobx";

import * as Api from "../middleware/api";

export default class SampleStore {
    @observable users = [];
    @observable usersFilter = [];
    @observable member = [];

    @action
    getUsers() {
        return Api.getUsers().then(result => {
            this.users = result.values;
        })
    }

    @action
    insertGroup(payload) {
        const pay = {
            group_name:payload
        }
        return Api.insertGroup(pay).then( result =>   {
            console.log(result);
            const data = []
             this.member.map(value => {
                const dataTmp = [];
                dataTmp.push(result.values.id);
                dataTmp.push(value.id)
                data.push(dataTmp)
            })
            return this.insertMember(data);
        })
    }

    @action
    insertMember(payload) {
        const pay ={
            data: payload
        }
        return Api.insertMember(pay).then(result => {
            return result;
        })
    }
}

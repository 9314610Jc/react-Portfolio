/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

export default {
    getRepos: function(username){
      return  axios.get(`https://api.github.com/users/9314610Jc/repos?per_page=12&sort=updated&order=asc`)
    }
 
}
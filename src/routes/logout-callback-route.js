/**
 * Copyright 2020
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
import React from 'react';
import { navigate } from "gatsby"
import URI from "urijs"

export class LogOutCallbackRoute extends React.Component {

  constructor(props){
    const { doLogout, location } = props;
    const storedState = window.localStorage.getItem('post_logout_state');
    const query = URI.parseQuery(location.search);

    window.localStorage.removeItem('post_logout_state');

    super(props);

    this.state = {
      error: null
    };

    if (!query.hasOwnProperty("state")) {
      this.state.error = 'Missing State.';
    } else if (query["state"] !== storedState) {
      this.state.error = 'Invalid State.';
    }

    doLogout();
    navigate("/");
  }

  render() {
    if(this.state.error != null){
      return (<p>${this.state.error}</p>)
    }
    return null;
  }

}

export default LogOutCallbackRoute
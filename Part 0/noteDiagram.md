# Note Diagram

- Sequence

  - Participant Browser
  - Participant Server

  Browser ->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  _Activate Server_
  Server ->> Browser: HTML Document
  _Desactivate Server_

  Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  _Activate Server_
  Server ->> Browser: HTML Document
  _Desactivate Server_

  Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  _Activate Server_
  Server ->> Browser: the Javascript file
  _Desactivate Server_

  Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  _Activate Server_
  Server ->> Browser: the CSS file
  _Desactivate file_

  Browser ->> Server: GET chrome-extension://lgmpcpglpngdoalbgeoldeajfclnhafa/inpa
  _Activate Server_
  Server ->> Browser: a Javascript file
  _Desactivate Browser_

  Browser ->> Server: POST https://api.trongrid.io/wallet/getnodeinfo
  _Activate Server_
  Server ->> Browser: {"activeConnectCount":3, ....}
  _Desactivate Server_

  Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  _Activate Server_
  Server ->> Browser: [{"content":"ghghgh","date":"2024-02-07T19:44:16.773Z"}, ...]
  _Desactivate Browser_

# Note Diagram

- Sequence

  - Participant Browser
  - Participant Server

  Browser ->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note  
  Activate Server  
  Server ->> Browser: HTML Document  
  Desactivate Server

  Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/notes  
  Activate Server  
  Server ->> Browser: HTML Document  
  Desactivate Server

  Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js  
  Activate Server  
  Server ->> Browser: the Javascript file  
  Desactivate Server

  Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css  
  Activate Server  
  Server ->> Browser: the CSS file  
  Desactivate file

  Browser ->> Server: GET chrome-extension://lgmpcpglpngdoalbgeoldeajfclnhafa/inpa  
  Activate Server  
  Server ->> Browser: a Javascript file  
  Desactivate Browser

  Browser ->> Server: POST https://api.trongrid.io/wallet/getnodeinfo  
  Activate Server  
  Server ->> Browser: {"activeConnectCount":3, ....}  
  Desactivate Server

  Browser ->> Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json  
  Activate Server  
  Server ->> Browser: [{"content":"ghghgh","date":"2024-02-07T19:44:16.773Z"}, ...]  
  Desactivate Browser

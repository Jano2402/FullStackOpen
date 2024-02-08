# Note Diagram

- Sequence

  - Participant Browser
  - Participant Server

  Browser ->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa  
  Activate Server  
  Server ->> Browser: a JSON file with this {"message":"note created"}  
  Desactivate Server

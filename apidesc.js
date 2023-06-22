/*1.Create Nudge:
Method: POST
Endpoint: /nudges
Description: Creates a new nudge.
Request Body:
{
  "eventId": "event_id",
  "title": "Nudge Title",
  "image": "base64_encoded_image",
  "sendTime": "yyyy-mm-ddThh:mm:ss",
  "description": "Nudge Description",
  "icon": "Nudge Icon URL",
  "invitation": "One line invitation"
}

Res:
{
  "nudgeId": "nudge_id"
}
*/


// 2.Get Nudge by ID:
// Method: GET
// Endpoint: /nudges/:id
// Description: Retrieves a nudge by its unique ID.
// Res:
// {
//   "eventId": "event_id",
//   "title": "Nudge Title",
//   "image": "base64_encoded_image",
//   "sendTime": "yyyy-mm-ddThh:mm:ss",
//   "description": "Nudge Description",
//   "icon": "Nudge Icon URL",
//   "invitation": "One line invitation"
// }


// 3.Get Recent Nudges with Pagination:
// Method: GET
// Endpoint: /nudges
// Description: Retrieves a specific number of recent nudges based on page number and limit of nudges per page.
// Query Parameters:
// page (optional): Page number (default: 1)
// limit (optional): Number of nudges per page (default: 10)
// Res:
// [
//   {
//     "nudgeId": "nudge_id",
//     "eventId": "event_id",
//     "title": "Nudge Title",
//     "image": "base64_encoded_image",
//     "sendTime": "yyyy-mm-ddThh:mm:ss",
//     "description": "Nudge Description",
//     "icon": "Nudge Icon URL",
//     "invitation": "One line invitation"
//   },
  
// ]


// 4.Update Nudge by ID:
// Method: PUT
// Endpoint: /nudges/:id
// Description: Updates an existing nudge by its unique ID.
//Res:
// {
//   "message": "Nudge updated"
// }


// 5.Delete Nudge by ID:
// Method: DELETE
// Endpoint: /nudges/:id
// Description: Deletes a nudge by its unique ID.
// Res:
// {
//   "message": "Nudge deleted"
// }

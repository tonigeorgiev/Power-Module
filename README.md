### Whole description of the simulation process and the behavior of the components
* Both payloads - OBC and Camera will be automatically connected. Both batteries will start at 30V (that is the maximum capacity of the battery). The initial current draw of the OBC payload is 2A and of the Camera, the payload is 1.5A (I wanted to make them different in order to simulate different behavior - no logic behind those numbers). I have considered that during the whole time, our Power module will have access to sunlight and it will be able to charge using its sun panels (each second 1V is added to each battery pack's Voltage). Each second when a payload is connected to its battery it will drain as many voltages as its current draw is. For example: If the Camera has a 1.5A current draw, each second the Camera pack voltages will lose 0.5V (as it is charging with 1v each second). Every 5 seconds, bоth OBC and Camera current draw will be increased by 0.5A (also, a random number). Whenever a 'Disconnect' button is clicked, the current draw of the respective payload will be set to 0 and the battery will continue charging with 1V per second. If the battery pack decreases it's voltages to 0, the payload will be automatically disconnected. Whenever a 'Connect' button is clicked, the current draw of this payload will be set to 1.5A and it will again start draining electricity from the battery. 
* Whenever a battery's voltages decrease below or equal to 18V, a red notification will be shown in the notification panel. If the voltages increase beyond 18V it will be hidden.
* Whenever a battery's current draw goes beyond 2.5A but below 3A a yellow notification will be shown with text - 'High current draw...'. If the current draw goes outside of these thresholds it will be hidden.
* Whenever a battery's current draw goes beyond or equal to 3 a yellow notification will be shown with text - 'Extremely High current draw...'. If the current draw decreases below 3A it will be hidden.
### `npm i`

Install the required modules.
### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


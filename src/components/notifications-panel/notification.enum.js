export const NotificationEnum = {
    "LOW_VOLTAGE_OBC":0, 
    "LOW_VOLTAGE_CAMERA":1, 
    "HIGH_CURRENT_VALUE_OBC":2,
    "HIGH_CURRENT_VALUE_CAMERA": 3,
    "EXTREMELY_HIGH_CURRENT_VALUE_OBC":4,
    "EXTREMELY_HIGH_CURRENT_VALUE_CAMERA": 5
}

export const DEFAULT_NOTIFICATIONS = [
    {text:"Low voltage - OBC Battery", class: "danger border", show: false},
    {text:"Low voltage - Camera Battery", class: "danger border", show: false},
    {text:"High current draw - OBC Battery", class: "danger warning border", show: false},
    {text:"High current draw - Camera Battery", class: "danger warning border", show: false},
    {text:"Extremely high current draw - OBC Battery", class: "danger warning border", show: false},
    {text:"Extremely high current draw - Camera Battery", class: "danger warning border", show: false},
  ]
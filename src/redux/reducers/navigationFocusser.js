const NavigationReducer = (state = 'Insights', action) => {
    switch(action.type){
        case 'Insights':
            console.log('inside insights reducer')
            return state = 'Insights'
        case 'Incidents':
            return state = 'Incidents'
        case 'Invoices':
            return state = 'Invoices'
        case 'YourTeam':
            return state = 'YourTeam'
        case 'IncidentSettings':
            return state = 'IncidentSettings'
        case 'HelpAndSupport':
            return state = 'HelpAndSupport'
        case 'Settings':
            return state = 'Settings'
        default:
            return state
    }    
}
export default NavigationReducer
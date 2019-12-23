// -- actions -- //

export const InsightFocus = () => {
    return {
        type: 'Insights'
    }
}

export const IncidentFocus = () => {
    return {
        type: 'Incidents'
    }
}

export const TeamAlertFocus = () => {
    return {
        type: 'Invoices'
    }
}

export const YourTeamFocus = () => {
    return {
        type: 'YourTeam'
    }
}

export const IncidentSettingsFocus = () => {
    return {
        type: 'IncidentSettings'
    }
}

export const HelpAndSupportFocus = () => {
    return {
        type: 'HelpAndSupport'
    }
}

export const SettingsFocus = () => {
    return {
        type: 'Settings'
    }
}
// -- reducers -- // 

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
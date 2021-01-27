module.exports = {
    groupId: 6141441,
    maximumRank: 233,
    prefix: 'q!',
    logChannelId: '',
    shoutChannelId: '',
    auditLogChannelId: '',
    colors: {
        info: '#5b57d9',
        error: '#de554e',
        neutral: '#f2f255',
        success: '#43d177'
    },
    verificationChecks: false,
    firedRank: 2,
    xpRankup: {
        enabled: false,
        roles: [
            // Example: {
            //     rank: 2,
            //     xpNeeded: 10
            // }
            Auxilia: {
                rank: 2,
                xpNeeded: 0
                hpNeeded: 0
            }
            Tiro: {
                rank: 150,
                xpNeeded: 15
                hpNeeded: 0
            }
            Milites: {
                rank: 200,
                xpNeeded: 30
                hpNeeded: 0
            }
            Immunes: {
                rank: 205,
                xpNeeded: 60
                hpNeeded: 0
            }
            Lictoris: {
                rank: 206,
                xpNeeded: 120
                hpNeeded: 0
            }
            Sesquiplicarius: {
                rank: 214,
                xpNeeded: 180
                hpNeeded: 5
            }
            Duplicarius: {
                rank: 215,
                xpNeeded: 240
                hpNeeded: 25
            }
            Triplicarius: {
                rank: 219,
                xpNeeded: 300
                hpNeeded: 25
            }
            Optio: {
                rank: 230,
                xpNeeded: 300
                hpNeeded: 50
            }
            Centurion: {
                rank: 233,
                xpNeeded: 300
                hpNeeded: 100
            }
        ]
    },
    memberCount: {
        enabled: false,
        groupIconURL: '',
        channelId: '',
        milestones: []
    }
}

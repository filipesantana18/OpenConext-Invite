const pt = {
    code: "PT",
    name: "Português",
    select_locale: "Mudar idioma para Português",
    languages: {
        language: "Idioma",
        languageTooltip: "Escolha o idioma do email de convite",
        en: "Inglês",
        nl: "Holandês",
        pt: "Português",
    },
    landing: {
        header: {
            title: "Gerir acesso às suas aplicações",
            login: "Iniciar sessão",
            sup: "SURFconext Invite é apenas por convite.",
        },
        works: "Como funciona?",
        adminFunction: "função de administrador",
        info: [
            ["Convites", "<p>A SURF convida gestores de instituições que podem criar funções para as suas aplicações.</p>" +
            "<p>A lista de aplicações consiste em aplicações conectadas ao SURFconext.</p>", true],
            ["Funções", "<p>Os gestores de aplicações convidarão colegas para funções que, por sua vez, podem convidar utilizadores.</p>", true],
            ["Juntar-se", "<p>Os colegas convidados que aceitarem o convite recebem direitos de acesso às aplicações.</p><br/>", false],
            ["Grupos", "<p>As funções são, na verdade, associações a grupos que podem ser usadas em regras de autorização do SURFconext, ou provisionadas como atributos ou para APIs SCIM externas.</p>", false]
        ],
        footer: "<p>O SURFconext Invite oferece gestão de acesso a aplicações conectadas ao SURFconext.</p>" +
            "<p>Quer saber mais? <a href='https://support.surfconext.nl/invite-en'>Leia mais</a>.</p>",
    },
    header: {
        title: "SURFconext Invite",
        subTitle: "Tudo ficará bem",
        links: {
            login: "Iniciar sessão",
            system: "Sistema",
            switchApp: "Ir para {{app}}",
            welcome: "Bem-vindo",
            access: "Convite",
            help: "Ajuda",
            profile: "Perfil",
            logout: "Terminar sessão"
        },
    },
    tabs: {
        home: "Início",
        applications: "Aplicações",
        users: "Utilizadores",
        applicationUsers: "Utilizadores",
        maintainers: "Gestores de funções e convites",
        guests: "Utilizadores com esta função",
        invitations: "Convites",
        roles: "Funções de acesso",
        profile: "Perfil",
        userRoles: "Gestores de funções e convites",
        guestRoles: "Utilizadores com esta função",
        cron: "Cron",
        invite: "Convidar",
        tokens: "Tokens de API",
        unknownRoles: "Aplicações em falta",
        expiredUserRoles: "Expiração de funções de utilizadores",
        pendingInvitations: "Pendentes",
        allPendingInvitations: "Convites pendentes",
        acceptedInvitations: "Aceites",
        performanceSeed: "Semente",
        seed: "Semente"
    },
    home: {
        access: "SURFconext Invite",
    },
    impersonate: {
        exit: "Parar de personificar",
        impersonator: "Está a personificar <strong>{{name}}</strong> | <strong>{{role}}</strong>",
        impersonatorTooltip: "Você é realmente <em>{{impersonator}}</em>, mas está a personificar <em>{{currentUser}}</em>.",
        flash: {
            startedImpersonation: "Agora está a personificar {{name}}.",
            clearedImpersonation: "Parou de personificar. Você voltou a ser você mesmo."
        },
    },
    access: {
        SUPER_USER: "Super Utilizador",
        INSTITUTION_ADMIN: "Administrador da Instituição",
        MANAGER: "Gestor",
        INVITER: "Convidador",
        GUEST: "Utilizador",
        "No member": "Sem membro"
    },
    users: {
        found: "{{count}} {{plural}} encontrados",
        moreResults: "Existem mais resultados do que os mostrados, refine a sua pesquisa.",
        applicationsSearchPlaceHolder: "Pesquisar aplicação...",
        name_email: "Nome / email",
        name: "Nome",
        email: "Email",
        highestAuthority: "Função",
        createdAt: "Criado",
        schacHomeOrganization: "Instituição",
        lastActivity: "Última atividade",
        organizationGUID: "GUID da Organização",
        eduPersonPrincipalName: "EPPN",
        sub: "Sub",
        singleUser: "utilizador",
        multipleUsers: "utilizadores",
        noEntities: "Nenhum utilizador encontrado",
        new: "Novo convite",
        title: "Utilizadores",
        roles: "Funções",
        applications: "Aplicações",
        noRolesInfo: "Não tem funções (o que significa que deve ser super-utilizador)",
        noRolesInstitutionAdmin: "É um administrador da instituição e não tem funções (mas pode ter acesso a aplicações)",
        noRolesNoApplicationsInstitutionAdmin: "É um administrador da instituição, mas não tem funções e aparentemente a sua instituição também não tem acesso a aplicações",
        guestRoleOnly: "Não é um administrador. Está à procura de <a href='{{welcomeUrl}}'>as aplicações a que pode aceder</a>?",
        rolesInfo: "Tem as seguintes funções",
        applicationsInfo: "Tem acesso às seguintes aplicações",
        noRolesFound: "Nenhuma função encontrada.",
        noApplicationsFound: "Nenhuma aplicação encontrada.",
        rolesInfoOther: "{{name}} tem as seguintes funções",
        applicationsInfoOther: "{{name}} tem acesso às seguintes aplicações",
        landingPage: "Página inicial",
        access: "Acesso",
        organisation: "Organização",
        noResults: "Nenhum utilizador encontrado",
        searchPlaceHolder: "Pesquisar utilizadores...",
        authority: "Autoridade",
        endDate: "Data de término",
        expiryDays: "Dias de expiração",
        roleExpiryTooltip: "Ordenar por funções para ver quais expirarão mais cedo"
    },
    // Additional translations would follow the same pattern...
};

export default pt;
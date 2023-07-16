import React, {useEffect, useRef, useState} from "react";
import "./User.scss";
import InputField from "./InputField";
import {dateFromEpoch} from "../utils/Date";
import {highestAuthority} from "../utils/UserRole";
import I18n from "../locale/I18n";
import Logo from "./Logo";
import {Card, CardType} from "@surfnet/sds";
import {isEmpty} from "../utils/Utils";
import {RoleMetaData} from "./RoleMetaData";
import {providerInfo} from "../utils/Manage";
import {ReactComponent as SearchIcon} from "@surfnet/sds/icons/functional-icons/search.svg";

export const User = ({user, other}) => {
    const searchRef = useRef();

    const [query, setQuery] = useState("");

    useEffect(() => {
        if (searchRef && searchRef.current) {
            searchRef.current.focus();
        }
    }, [searchRef])

    const attribute = (index, name, isDate = false) => {
        const attr = user[name];
        return (
            <InputField noInput={true}
                        key={index}
                        disabled={true}
                        value={attr ? (isDate ? dateFromEpoch(attr) : attr) : "-"}
                        name={I18n.t(`users.${name}`)}/>
        )
    }

    const renderSearch = () => {
        return (
            <div className={`search standalone`}>
                <div className={"sds--text-field sds--text-field--has-icon"}>
                    <div className="sds--text-field--shape">
                        <div className="sds--text-field--input-and-icon">
                            <input className={"sds--text-field--input"}
                                   type="search"
                                   onChange={e => setQuery(e.target.value)}
                                   value={query}
                                   ref={searchRef}
                                   placeholder={I18n.t(`users.applicationsSearchPlaceHolder`)}/>
                            <span className="sds--text-field--icon">
                                    <SearchIcon/>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const filterUserRole = userRole => {
        if (isEmpty(query)) {
            return true;
        }
        const queryLower = query.toLowerCase();
        const role = userRole.role;
        return role.name.toLowerCase().indexOf(queryLower) > -1 ||
            role.description.toLowerCase().indexOf(queryLower) > -1
    };

    const renderUserRole = (userRole, index) => {
        const role = userRole.role;
        const provider = user.providers.find(data => data.id === role.manageId) || providerInfo(null);
        const logo = provider.data.metaDataFields["logo:0:url"];
        const children =
            <div key={index} className={"user-role"}>
                <Logo src={logo} alt={"provider"} className={"provider"}/>
                <section className={"user-role-info"}>
                    <h3>{role.name}</h3>
                    <p>{role.description}</p>
                    <RoleMetaData role={role} user={user} provider={provider}/>
                </section>
            </div>;
        return (
            <Card cardType={CardType.Big} children={children}/>
        );
    }

    user.highestAuthority = I18n.t(`access.${highestAuthority(user)}`);
    const attributes = [["name"], ["sub"], ["eduPersonPrincipalName"], ["schacHomeOrganization"], ["email"], ["highestAuthority"],
        ["lastActivity", true]];
    const filteredUserRoles = user.userRoles
        .filter(filterUserRole);
    return (
        <section className={"user"}>
            {attributes.map((attr, index) => attribute(index, attr[0], attr[1]))}

            <h3 className={"title span-row "}>{I18n.t("users.roles")}</h3>
            {isEmpty(user.userRoles) && <p className={"span-row "}>{I18n.t("users.noRolesInfo")}</p>}
            {!isEmpty(user.userRoles) &&
                <>
                    <div className="roles-search span-row">
                        <p  >
                            {I18n.t(`users.${other ? "rolesInfoOther" : "rolesInfo"}`, {name: user.name})}
                        </p>
                        {renderSearch()}
                    </div>
                    {filteredUserRoles
                        .map((userRole, index) => renderUserRole(userRole, index))}
                    {filteredUserRoles.length === 0 &&
                        <p>{I18n.t(`users.noRolesFound`)}</p>}
                </>}
        </section>
    );
}
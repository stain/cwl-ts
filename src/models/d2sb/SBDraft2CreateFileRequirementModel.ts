import {CreateFileRequirement} from "../../mappings/d2sb/CreateFileRequirement";
import {FileDef} from "../../mappings/d2sb/FileDef";
import {CreateFileRequirementModel} from "../generic/CreateFileRequirementModel";
import {Serializable} from "../interfaces/Serializable";
import {SBDraft2FileDefModel} from "./FileDefModel";

export class SBDraft2CreateFileRequirementModel extends CreateFileRequirementModel implements Serializable<CreateFileRequirement> {
    public 'class' = "CreateFileRequirement";
    private _listing: SBDraft2FileDefModel[] = [];

    get listing(): SBDraft2FileDefModel[] {
        return this._listing;
    }

    set listing(value: SBDraft2FileDefModel[]) {
        this._listing = [];

        value.forEach((def, index) => {
            if (!(def instanceof SBDraft2FileDefModel)) {
                def = new SBDraft2FileDefModel(<FileDef> def);
            }
            this._listing.push(def);

            def.loc = `${this.loc}.fileDef[${index}]`;
            def.setValidationCallback(err => this.updateValidity(err));
        })
    }

    constructor(req: CreateFileRequirement, loc?: string) {
        super(loc);
        this.deserialize(req);
    }

    public addDirent(def: SBDraft2FileDefModel | FileDef): SBDraft2FileDefModel {
        if (def instanceof SBDraft2FileDefModel) {
            this._listing.push(def);
            def.setValidationCallback(err => this.updateValidity(err));
            def.loc = `${this.loc}.fileDef[${this._listing.length}]`;
            return def;
        } else {
            const d = new SBDraft2FileDefModel(<FileDef> def);
            d.loc   = `${this.loc}.fileDef[${this._listing.length}]`;
            d.setValidationCallback(err => this.updateValidity(err));
            this._listing.push(d);
            return d;
        }
    }

    deserialize(req: CreateFileRequirement) {
        if (req.fileDef && Array.isArray(req.fileDef)) {
            this._listing = req.fileDef.map((def, index) => {
                const d = new SBDraft2FileDefModel(def, `${this.loc}.fileDef[${index}]`);
                d.setValidationCallback(err => this.updateValidity(err));
                return d;
            });
        }

        Object.keys(req).forEach(key => {
            if (key !== "fileDef" && key !== "class") this.customProps[key] = req[key];
        });
    }

    serialize(): CreateFileRequirement {
        let base = <CreateFileRequirement> {};

        base.class   = "CreateFileRequirement";
        base.fileDef = this._listing.map(def => def.serialize());

        // don't serialize if the only property that is being serialized is the class
        const customPropsKeys = Object.keys(this.customProps);
        if (base.fileDef.length === 0 && customPropsKeys.length === 0) {
            return undefined;
        }

        return Object.assign({}, base, this.customProps);
    }

}
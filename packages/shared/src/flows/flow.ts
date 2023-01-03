import {BaseModel} from "../common/base-model";
import {CollectionId} from "../collections/collection";
import {ApId} from "../common/id-generator";
import {FlowVersion} from "./flow-version";

export type FlowId = ApId;

export interface Flow extends BaseModel<FlowId> {

    collectionId: CollectionId;
    version: FlowVersion | null;

}

import OnCallDutyPolicySchedule from "./OnCallDutyPolicySchedule";
import Project from "./Project";
import User from "./User";
import BaseModel from "Common/Models/BaseModel";
import Route from "Common/Types/API/Route";
import { PlanSelect } from "Common/Types/Billing/SubscriptionPlan";
import ColumnAccessControl from "Common/Types/Database/AccessControl/ColumnAccessControl";
import TableAccessControl from "Common/Types/Database/AccessControl/TableAccessControl";
import TableBillingAccessControl from "Common/Types/Database/AccessControl/TableBillingAccessControl";
import ColumnLength from "Common/Types/Database/ColumnLength";
import ColumnType from "Common/Types/Database/ColumnType";
import CrudApiEndpoint from "Common/Types/Database/CrudApiEndpoint";
import EnableDocumentation from "Common/Types/Database/EnableDocumentation";
import TableColumn from "Common/Types/Database/TableColumn";
import TableColumnType from "Common/Types/Database/TableColumnType";
import TableMetadata from "Common/Types/Database/TableMetadata";
import TenantColumn from "Common/Types/Database/TenantColumn";
import UniqueColumnBy from "Common/Types/Database/UniqueColumnBy";
import Recurring from "Common/Types/Events/Recurring";
import IconProp from "Common/Types/Icon/IconProp";
import ObjectID from "Common/Types/ObjectID";
import RestrictionTimes from "Common/Types/OnCallDutyPolicy/RestrictionTimes";
import Permission from "Common/Types/Permission";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";

@EnableDocumentation()
@TableBillingAccessControl({
  create: PlanSelect.Growth,
  read: PlanSelect.Growth,
  update: PlanSelect.Growth,
  delete: PlanSelect.Growth,
})
@TenantColumn("projectId")
@TableAccessControl({
  create: [
    Permission.ProjectOwner,
    Permission.ProjectAdmin,
    Permission.ProjectMember,
    Permission.CreateOnCallDutyPolicyScheduleLayer,
  ],
  read: [
    Permission.ProjectOwner,
    Permission.ProjectAdmin,
    Permission.ProjectMember,
    Permission.ReadOnCallDutyPolicyScheduleLayer,
  ],
  delete: [
    Permission.ProjectOwner,
    Permission.ProjectAdmin,
    Permission.DeleteOnCallDutyPolicyScheduleLayer,
  ],
  update: [
    Permission.ProjectOwner,
    Permission.ProjectAdmin,
    Permission.EditOnCallDutyPolicyScheduleLayer,
  ],
})
@CrudApiEndpoint(new Route("/on-call-duty-schedule-layer"))
@TableMetadata({
  tableName: "OnCallDutyPolicyScheduleLayer",
  singularName: "On-Call Schedule Layer",
  pluralName: "On-Call Schedule Layers",
  icon: IconProp.Layers,
  tableDescription: "On-Call Schedule Layers",
})
@Entity({
  name: "OnCallDutyPolicyScheduleLayer",
})
export default class OnCallDutyPolicyScheduleLayer extends BaseModel {
  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [],
  })
  @TableColumn({
    manyToOneRelationColumn: "projectId",
    type: TableColumnType.Entity,
    modelType: Project,
    title: "Project",
    description: "Relation to Project Resource in which this object belongs",
  })
  @ManyToOne(
    () => {
      return Project;
    },
    {
      eager: false,
      nullable: true,
      onDelete: "CASCADE",
      orphanedRowAction: "nullify",
    },
  )
  @JoinColumn({ name: "projectId" })
  public project?: Project = undefined;

  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [],
  })
  @Index()
  @TableColumn({
    type: TableColumnType.ObjectID,
    required: true,
    canReadOnRelationQuery: true,
    title: "Project ID",
    description: "ID of your OneUptime Project in which this object belongs",
  })
  @Column({
    type: ColumnType.ObjectID,
    nullable: false,
    transformer: ObjectID.getDatabaseTransformer(),
  })
  public projectId?: ObjectID = undefined;

  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [],
  })
  @TableColumn({
    manyToOneRelationColumn: "onCallDutyPolicyScheduleId",
    type: TableColumnType.Entity,
    modelType: OnCallDutyPolicySchedule,
    title: "On-Call Policy Schedule",
    description:
      "Relation to On-Call Policy Schedule where this escalation rule belongs.",
  })
  @ManyToOne(
    () => {
      return OnCallDutyPolicySchedule;
    },
    {
      eager: false,
      nullable: true,
      onDelete: "CASCADE",
      orphanedRowAction: "nullify",
    },
  )
  @JoinColumn({ name: "onCallDutyPolicyScheduleId" })
  public onCallDutyPolicySchedule?: OnCallDutyPolicySchedule = undefined;

  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [],
  })
  @Index()
  @TableColumn({
    type: TableColumnType.ObjectID,
    required: true,
    canReadOnRelationQuery: true,
    title: "On-Call Policy Schedule ID",
    description:
      "ID of your On-Call Policy Schedule where this escalation rule belongs.",
  })
  @Column({
    type: ColumnType.ObjectID,
    nullable: false,
    transformer: ObjectID.getDatabaseTransformer(),
  })
  public onCallDutyPolicyScheduleId?: ObjectID = undefined;

  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.EditOnCallDutyPolicyScheduleLayer,
    ],
  })
  @TableColumn({
    required: true,
    type: TableColumnType.ShortText,
    canReadOnRelationQuery: true,
    title: "Name",
    description: "Friendly name for this layer",
  })
  @Column({
    nullable: false,
    type: ColumnType.ShortText,
    length: ColumnLength.ShortText,
  })
  @UniqueColumnBy("projectId")
  public name?: string = undefined;

  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.EditOnCallDutyPolicyScheduleLayer,
    ],
  })
  @TableColumn({
    required: false,
    type: TableColumnType.LongText,
    title: "Description",
    description:
      "Description for this layer. This is optional and can be left blank.",
  })
  @Column({
    nullable: true,
    type: ColumnType.LongText,
    length: ColumnLength.LongText,
  })
  public description?: string = undefined;

  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [],
  })
  @TableColumn({
    manyToOneRelationColumn: "createdByUserId",
    type: TableColumnType.Entity,
    modelType: User,
    title: "Created by User",
    description:
      "Relation to User who created this object (if this object was created by a User)",
  })
  @ManyToOne(
    () => {
      return User;
    },
    {
      eager: false,
      nullable: true,
      onDelete: "CASCADE",
      orphanedRowAction: "nullify",
    },
  )
  @JoinColumn({ name: "createdByUserId" })
  public createdByUser?: User = undefined;

  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [],
  })
  @TableColumn({
    type: TableColumnType.ObjectID,
    title: "Created by User ID",
    description:
      "User ID who created this object (if this object was created by a User)",
  })
  @Column({
    type: ColumnType.ObjectID,
    nullable: true,
    transformer: ObjectID.getDatabaseTransformer(),
  })
  public createdByUserId?: ObjectID = undefined;

  @ColumnAccessControl({
    create: [],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [],
  })
  @TableColumn({
    manyToOneRelationColumn: "deletedByUserId",
    type: TableColumnType.Entity,
    title: "Deleted by User",
    description:
      "Relation to User who deleted this object (if this object was deleted by a User)",
  })
  @ManyToOne(
    () => {
      return User;
    },
    {
      cascade: false,
      eager: false,
      nullable: true,
      onDelete: "CASCADE",
      orphanedRowAction: "nullify",
    },
  )
  @JoinColumn({ name: "deletedByUserId" })
  public deletedByUser?: User = undefined;

  @ColumnAccessControl({
    create: [],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [],
  })
  @TableColumn({
    type: TableColumnType.ObjectID,
    title: "Deleted by User ID",
    description:
      "User ID who deleted this object (if this object was deleted by a User)",
  })
  @Column({
    type: ColumnType.ObjectID,
    nullable: true,
    transformer: ObjectID.getDatabaseTransformer(),
  })
  public deletedByUserId?: ObjectID = undefined;

  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.EditOnCallDutyPolicyScheduleLayer,
    ],
  })
  @TableColumn({
    isDefaultValueColumn: false,
    type: TableColumnType.Number,
    canReadOnRelationQuery: true,
    title: "Order",
    description:
      "Order / Priority of this layer. Lower the number, higher the priority.",
  })
  @Column({
    type: ColumnType.Number,
  })
  public order?: number = undefined;

  @TableColumn({
    title: "Start At",
    type: TableColumnType.Date,
    required: true,
    description: "Start date and time of this layer.",
  })
  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.EditOnCallDutyPolicyScheduleLayer,
    ],
  })
  @Column({
    nullable: false,
    type: ColumnType.Date,
  })
  public startsAt?: Date = undefined;

  @TableColumn({
    title: "Rotation",
    type: TableColumnType.JSON,
    required: true,
    description:
      "How often would you like to hand off the duty to the next user in this layer?",
  })
  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.EditOnCallDutyPolicyScheduleLayer,
    ],
  })
  @Column({
    nullable: false,
    type: ColumnType.JSON,
    default: Recurring.getDefault(),
    transformer: Recurring.getDatabaseTransformer(),
  })
  public rotation?: Recurring = undefined;

  @TableColumn({
    title: "Hand Off Time",
    type: TableColumnType.Date,
    required: true,
    description:
      "Hand off time. When would you like to hand off the duty to the next user in this layer?",
  })
  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.EditOnCallDutyPolicyScheduleLayer,
    ],
  })
  @Column({
    nullable: false,
    type: ColumnType.Date,
  })
  public handOffTime?: Date = undefined;

  @TableColumn({
    title: "Restriction Times",
    type: TableColumnType.JSON,
    required: true,
    description: "Restrict this layer to these times",
  })
  @ColumnAccessControl({
    create: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.CreateOnCallDutyPolicyScheduleLayer,
    ],
    read: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.ReadOnCallDutyPolicyScheduleLayer,
    ],
    update: [
      Permission.ProjectOwner,
      Permission.ProjectAdmin,
      Permission.ProjectMember,
      Permission.EditOnCallDutyPolicyScheduleLayer,
    ],
  })
  @Column({
    nullable: false,
    type: ColumnType.JSON,
    default: RestrictionTimes.getDefault(),
    transformer: RestrictionTimes.getDatabaseTransformer(),
  })
  public restrictionTimes?: RestrictionTimes = undefined;
}

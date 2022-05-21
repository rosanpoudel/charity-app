// source: permission.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.brilltech.maaser.entities.Permission', null, global);
goog.exportSymbol('proto.brilltech.maaser.entities.PermissionAssign', null, global);
goog.exportSymbol('proto.brilltech.maaser.entities.PermissionAssignReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.brilltech.maaser.entities.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.brilltech.maaser.entities.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.brilltech.maaser.entities.Permission.displayName = 'proto.brilltech.maaser.entities.Permission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.brilltech.maaser.entities.PermissionAssign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.brilltech.maaser.entities.PermissionAssign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.brilltech.maaser.entities.PermissionAssign.displayName = 'proto.brilltech.maaser.entities.PermissionAssign';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.brilltech.maaser.entities.PermissionAssignReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.brilltech.maaser.entities.PermissionAssignReq.repeatedFields_, null);
};
goog.inherits(proto.brilltech.maaser.entities.PermissionAssignReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.brilltech.maaser.entities.PermissionAssignReq.displayName = 'proto.brilltech.maaser.entities.PermissionAssignReq';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.brilltech.maaser.entities.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.brilltech.maaser.entities.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.brilltech.maaser.entities.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.entities.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permission: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isdeleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    createdat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.brilltech.maaser.entities.Permission}
 */
proto.brilltech.maaser.entities.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.brilltech.maaser.entities.Permission;
  return proto.brilltech.maaser.entities.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.brilltech.maaser.entities.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.brilltech.maaser.entities.Permission}
 */
proto.brilltech.maaser.entities.Permission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermission(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdeleted(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.brilltech.maaser.entities.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.brilltech.maaser.entities.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.brilltech.maaser.entities.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.entities.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermission();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsdeleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string permissionId = 1;
 * @return {string}
 */
proto.brilltech.maaser.entities.Permission.prototype.getPermissionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.Permission} returns this
 */
proto.brilltech.maaser.entities.Permission.prototype.setPermissionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string permission = 2;
 * @return {string}
 */
proto.brilltech.maaser.entities.Permission.prototype.getPermission = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.Permission} returns this
 */
proto.brilltech.maaser.entities.Permission.prototype.setPermission = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool isDeleted = 3;
 * @return {boolean}
 */
proto.brilltech.maaser.entities.Permission.prototype.getIsdeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.brilltech.maaser.entities.Permission} returns this
 */
proto.brilltech.maaser.entities.Permission.prototype.setIsdeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int64 createdAt = 4;
 * @return {number}
 */
proto.brilltech.maaser.entities.Permission.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.brilltech.maaser.entities.Permission} returns this
 */
proto.brilltech.maaser.entities.Permission.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 updatedAt = 5;
 * @return {number}
 */
proto.brilltech.maaser.entities.Permission.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.brilltech.maaser.entities.Permission} returns this
 */
proto.brilltech.maaser.entities.Permission.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.toObject = function(opt_includeInstance) {
  return proto.brilltech.maaser.entities.PermissionAssign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.brilltech.maaser.entities.PermissionAssign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.entities.PermissionAssign.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionassignid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appliedby: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appliedto: jspb.Message.getFieldWithDefault(msg, 3, ""),
    permissionid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.brilltech.maaser.entities.PermissionAssign}
 */
proto.brilltech.maaser.entities.PermissionAssign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.brilltech.maaser.entities.PermissionAssign;
  return proto.brilltech.maaser.entities.PermissionAssign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.brilltech.maaser.entities.PermissionAssign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.brilltech.maaser.entities.PermissionAssign}
 */
proto.brilltech.maaser.entities.PermissionAssign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissionassignid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppliedby(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppliedto(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissionid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.brilltech.maaser.entities.PermissionAssign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.brilltech.maaser.entities.PermissionAssign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.entities.PermissionAssign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionassignid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppliedby();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppliedto();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPermissionid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string permissionAssignId = 1;
 * @return {string}
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.getPermissionassignid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.PermissionAssign} returns this
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.setPermissionassignid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string appliedBy = 2;
 * @return {string}
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.getAppliedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.PermissionAssign} returns this
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.setAppliedby = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string appliedTo = 3;
 * @return {string}
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.getAppliedto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.PermissionAssign} returns this
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.setAppliedto = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string permissionId = 4;
 * @return {string}
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.getPermissionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.PermissionAssign} returns this
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.setPermissionid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 createdAt = 5;
 * @return {number}
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.brilltech.maaser.entities.PermissionAssign} returns this
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 updatedAt = 6;
 * @return {number}
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.brilltech.maaser.entities.PermissionAssign} returns this
 */
proto.brilltech.maaser.entities.PermissionAssign.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.brilltech.maaser.entities.PermissionAssignReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.brilltech.maaser.entities.PermissionAssignReq.prototype.toObject = function(opt_includeInstance) {
  return proto.brilltech.maaser.entities.PermissionAssignReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.brilltech.maaser.entities.PermissionAssignReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.entities.PermissionAssignReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionassignsList: jspb.Message.toObjectList(msg.getPermissionassignsList(),
    proto.brilltech.maaser.entities.PermissionAssign.toObject, includeInstance),
    accountid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.brilltech.maaser.entities.PermissionAssignReq}
 */
proto.brilltech.maaser.entities.PermissionAssignReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.brilltech.maaser.entities.PermissionAssignReq;
  return proto.brilltech.maaser.entities.PermissionAssignReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.brilltech.maaser.entities.PermissionAssignReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.brilltech.maaser.entities.PermissionAssignReq}
 */
proto.brilltech.maaser.entities.PermissionAssignReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.brilltech.maaser.entities.PermissionAssign;
      reader.readMessage(value,proto.brilltech.maaser.entities.PermissionAssign.deserializeBinaryFromReader);
      msg.addPermissionassigns(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.brilltech.maaser.entities.PermissionAssignReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.brilltech.maaser.entities.PermissionAssignReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.brilltech.maaser.entities.PermissionAssignReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.entities.PermissionAssignReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionassignsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.brilltech.maaser.entities.PermissionAssign.serializeBinaryToWriter
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated PermissionAssign permissionAssigns = 1;
 * @return {!Array<!proto.brilltech.maaser.entities.PermissionAssign>}
 */
proto.brilltech.maaser.entities.PermissionAssignReq.prototype.getPermissionassignsList = function() {
  return /** @type{!Array<!proto.brilltech.maaser.entities.PermissionAssign>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.brilltech.maaser.entities.PermissionAssign, 1));
};


/**
 * @param {!Array<!proto.brilltech.maaser.entities.PermissionAssign>} value
 * @return {!proto.brilltech.maaser.entities.PermissionAssignReq} returns this
*/
proto.brilltech.maaser.entities.PermissionAssignReq.prototype.setPermissionassignsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.brilltech.maaser.entities.PermissionAssign=} opt_value
 * @param {number=} opt_index
 * @return {!proto.brilltech.maaser.entities.PermissionAssign}
 */
proto.brilltech.maaser.entities.PermissionAssignReq.prototype.addPermissionassigns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.brilltech.maaser.entities.PermissionAssign, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.brilltech.maaser.entities.PermissionAssignReq} returns this
 */
proto.brilltech.maaser.entities.PermissionAssignReq.prototype.clearPermissionassignsList = function() {
  return this.setPermissionassignsList([]);
};


/**
 * optional string accountId = 2;
 * @return {string}
 */
proto.brilltech.maaser.entities.PermissionAssignReq.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.PermissionAssignReq} returns this
 */
proto.brilltech.maaser.entities.PermissionAssignReq.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.brilltech.maaser.entities);

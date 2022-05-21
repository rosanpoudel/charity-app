// source: contact.proto
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

var maaser_pb = require('./maaser_pb.js');
goog.object.extend(proto, maaser_pb);
goog.exportSymbol('proto.brilltech.maaser.entities.Contact', null, global);
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
proto.brilltech.maaser.entities.Contact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.brilltech.maaser.entities.Contact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.brilltech.maaser.entities.Contact.displayName = 'proto.brilltech.maaser.entities.Contact';
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
proto.brilltech.maaser.entities.Contact.prototype.toObject = function(opt_includeInstance) {
  return proto.brilltech.maaser.entities.Contact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.brilltech.maaser.entities.Contact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.entities.Contact.toObject = function(includeInstance, msg) {
  var f, obj = {
    contactid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contacttype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isdeleted: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    phone: jspb.Message.getFieldWithDefault(msg, 7, ""),
    address: jspb.Message.getFieldWithDefault(msg, 8, ""),
    dob: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 10, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 11, 0),
    accountid: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.brilltech.maaser.entities.Contact}
 */
proto.brilltech.maaser.entities.Contact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.brilltech.maaser.entities.Contact;
  return proto.brilltech.maaser.entities.Contact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.brilltech.maaser.entities.Contact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.brilltech.maaser.entities.Contact}
 */
proto.brilltech.maaser.entities.Contact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContactid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {!proto.brilltech.maaser.entities.ContactType} */ (reader.readEnum());
      msg.setContacttype(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdeleted(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDob(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 12:
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
proto.brilltech.maaser.entities.Contact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.brilltech.maaser.entities.Contact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.brilltech.maaser.entities.Contact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.brilltech.maaser.entities.Contact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContactid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContacttype();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getIsdeleted();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDob();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string contactId = 1;
 * @return {string}
 */
proto.brilltech.maaser.entities.Contact.prototype.getContactid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setContactid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string refId = 2;
 * @return {string}
 */
proto.brilltech.maaser.entities.Contact.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.brilltech.maaser.entities.Contact.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.brilltech.maaser.entities.Contact.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ContactType contactType = 5;
 * @return {!proto.brilltech.maaser.entities.ContactType}
 */
proto.brilltech.maaser.entities.Contact.prototype.getContacttype = function() {
  return /** @type {!proto.brilltech.maaser.entities.ContactType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.brilltech.maaser.entities.ContactType} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setContacttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool isDeleted = 6;
 * @return {boolean}
 */
proto.brilltech.maaser.entities.Contact.prototype.getIsdeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setIsdeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string phone = 7;
 * @return {string}
 */
proto.brilltech.maaser.entities.Contact.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string address = 8;
 * @return {string}
 */
proto.brilltech.maaser.entities.Contact.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 dob = 9;
 * @return {number}
 */
proto.brilltech.maaser.entities.Contact.prototype.getDob = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setDob = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 createdAt = 10;
 * @return {number}
 */
proto.brilltech.maaser.entities.Contact.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 updatedAt = 11;
 * @return {number}
 */
proto.brilltech.maaser.entities.Contact.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string accountId = 12;
 * @return {string}
 */
proto.brilltech.maaser.entities.Contact.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.brilltech.maaser.entities.Contact} returns this
 */
proto.brilltech.maaser.entities.Contact.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


goog.object.extend(exports, proto.brilltech.maaser.entities);
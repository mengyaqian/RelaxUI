(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bac03"],{3918:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("RelaxTag",{attrs:{name:"表单验证"}},[a("template",{slot:"temp"},[a("x-form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate}},[a("x-form-item",{attrs:{label:"Name",prop:"name"}},[a("x-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.formValidate.name,callback:function(t){e.$set(e.formValidate,"name",t)},expression:"formValidate.name"}})],1),a("x-form-item",{attrs:{label:"E-mail",prop:"mail"}},[a("x-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.formValidate.mail,callback:function(t){e.$set(e.formValidate,"mail",t)},expression:"formValidate.mail"}})],1),a("x-form-item",[a("x-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("Submit")]),a("x-button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("Reset")])],1)],1)],1),a("template",{slot:"desc"},[e._v("\n        x-form 组件基于  async-validator 实现的数据验证，给 x-form 设置属性 rules，同时给需要验证的 x-form-item 设置属性 prop 指向对应字段即可。 "),a("br"),e._v("\n        验证方法也支持 Promise。\n      ")]),a("textarea",{attrs:{slot:"code"},slot:"code"},[e._v('<template slot="temp">\n  <x-form :model="formValidate" :rules="ruleValidate" ref="formValidate">\n    <x-form-item label="Name" prop="name">\n      <x-input placeholder="请输入用户名" v-model="formValidate.name"/>\n    </x-form-item>\n    <x-form-item label="E-mail" prop="mail">\n      <x-input placeholder="请输入邮箱" v-model="formValidate.mail"/>\n    </x-form-item>\n    <x-form-item>\n      <x-button type=\'primary\' @click="handleSubmit(\'formValidate\')">Submit</x-button>\n      <x-button @click="handleReset(\'formValidate\')" style="margin-left:10px;">Reset</x-button>\n    </x-form-item>\n  </x-form>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      formValidate: {\n        name: "",\n        mail: ""\n      },\n      ruleValidate: {\n        name: [\n          {\n            required: true,\n            message: "用户名不能为空",\n            trigger: "blur"\n          }\n        ],\n        mail: [\n          {\n            required: true,\n            message: "邮箱不能为空",\n            trigger: "blur"\n          },\n          { type: "email", message: "邮箱格式不正确", trigger: "blur" }\n        ]\n      }\n    };\n  },\n  methods: {\n    handleSubmit(name) {\n      this.$refs[name].validate(valid => {\n        if (valid) {\n          this.$message.success("验证成功!");\n        } else {\n          this.$message.error("验证不通过!");\n        }\n      });\n    },\n    handleReset(name) {\n      this.$refs[name].resetFields();\n    }\n  }\n};\n<\/script>\n\n      ')])],2)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"topbar"},[a("div",{staticClass:"page-title-box"},[a("h4",{staticClass:"page-title"},[e._v("Form 表单")]),a("p",{staticClass:"page-title-decs"},[e._v("具有数据收集、校验和提交功能的表单")])])])}],l=(a("7f7f"),{data:function(){return{formValidate:{name:"",mail:""},ruleValidate:{name:[{required:!0,message:"用户名不能为空",trigger:"blur"}],mail:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$message.success("验证成功!"):t.$message.error("验证不通过!")})},handleReset:function(e){this.$refs[e].resetFields()}}}),i=l,m=a("2877"),s=Object(m["a"])(i,n,r,!1,null,null,null);t["default"]=s.exports}}]);
import Component from '@ember/component';

export default Component.extend({
    admin: undefined,
    willRender(){
        console.log(this.get('admin'));
    }
});
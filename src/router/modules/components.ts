import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const componentsRouter: RouteConfig = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import(/* webpackChunkName: "tinymce" */ '@/views/components-demo/tinymce.vue'),
      name: 'TinymceDemo',
      meta: { title: 'tinymce' }
    },
    {
      path: 'markdown',
      component: () => import(/* webpackChunkName: "markdown" */ '@/views/components-demo/markdown.vue'),
      name: 'MarkdownDemo',
      meta: { title: 'markdown' }
    },
    {
      path: 'json-editor',
      component: () => import(/* webpackChunkName: "jsonEditor" */ '@/views/components-demo/json-editor.vue'),
      name: 'JsonEditorDemo',
      meta: { title: 'jsonEditor' }
    },
    // {
    //   path: 'split-pane',
    //   component: () => import('@/views/components-demo/split-pane'),
    //   name: 'SplitpaneDemo',
    //   meta: { title: 'SplitPane' }
    // },
    // {
    //   path: 'avatar-upload',
    //   component: () => import('@/views/components-demo/avatar-upload'),
    //   name: 'AvatarUploadDemo',
    //   meta: { title: 'Upload' }
    // },
    // {
    //   path: 'dropzone',
    //   component: () => import('@/views/components-demo/dropzone'),
    //   name: 'DropzoneDemo',
    //   meta: { title: 'Dropzone' }
    // },
    // {
    //   path: 'sticky',
    //   component: () => import('@/views/components-demo/sticky'),
    //   name: 'StickyDemo',
    //   meta: { title: 'Sticky' }
    // },
    {
      path: 'count-to',
      component: () => import(/* webpackChunkName: "countTo" */ '@/views/components-demo/count-to.vue'),
      name: 'CountToDemo',
      meta: { title: 'countTo' }
    },
    {
      path: 'mixin',
      component: () => import(/* webpackChunkName: "componentMixin" */ '@/views/components-demo/mixin.vue'),
      name: 'ComponentMixinDemo',
      meta: { title: 'componentMixin' }
    },
    {
      path: 'back-to-top',
      component: () => import(/* webpackChunkName: "backToTop" */ '@/views/components-demo/back-to-top.vue'),
      name: 'BackToTopDemo',
      meta: { title: 'backToTop' }
    },
    {
      path: 'draggable-dialog',
      component: () => import(/* webpackChunkName: "draggableDialog" */ '@/views/components-demo/draggable-dialog.vue'),
      name: 'DraggableDialogDemo',
      meta: { title: 'draggableDialog' }
    }
    // {
    //   path: 'drag-select',
    //   component: () => import('@/views/components-demo/drag-select'),
    //   name: 'DragSelectDemo',
    //   meta: { title: 'Drag Select' }
    // },
    // {
    //   path: 'dnd-list',
    //   component: () => import('@/views/components-demo/dnd-list'),
    //   name: 'DndListDemo',
    //   meta: { title: 'Dnd List' }
    // },
    // {
    //   path: 'drag-kanban',
    //   component: () => import('@/views/components-demo/drag-kanban'),
    //   name: 'DragKanbanDemo',
    //   meta: { title: 'Drag Kanban' }
    // }
  ]
}

export default componentsRouter

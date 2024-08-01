/** Reusable Vue component to display pagination below lists of tables..
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author tjanssen
 * @version 2021.06.08.0
 *
 */
define(
    ['jquery'],
    function (
        $
    ) {
    'use strict';
    return {
        props: {
            page: Number,
            pages: Array,
            pagenumbermargin: {
                type: Number,
                default: 2
            }
        },
        emits: ['update:page','update:pages', 'updatePage'],
        computed:{
            c_page: {
                get() {
                    return this.page;
                },
                set(value) {
                    this.$emit('update:page', value);
                    this.$emit('updatePage');
                }
            }
        },
        template: `
            <div class="pagination wrapper">
                <ul class="pagination" v-if="pages.length > 1" :data-pagemargin="pagenumbermargin">
                    <li class="page-item prev">
                        <button
                            class="page link iconlink ico-arrow-basic-important"
                            v-if="c_page != 1"
                            @click="c_page--"
                        >
                            Prev
                        </button>
                    </li>
                    <li class="page-item first">
                        <button class="page link" v-if="c_page != 1" @click="c_page = 1">1</button>
                    </li>

                    <li class="page-item filler" v-if="c_page > (pagenumbermargin + 2)">...</li>
                    <template class="page-item" v-for="page, index in pages" :key="100000 + c_page + page">
                        <li
                          class="page-item"
                          v-if="
                            c_page != page &&
                            page != 1 &&
                            page != pages.length &&
                            Math.abs(c_page - page) <= pagenumbermargin
                          "
                        >
                            <button class="page link" @click="c_page = page">{{ page }}</button>
                        </li>
                        <li v-else-if="c_page == page" class="page-item current">
                            <button class="page-link">{{ page }}</button>
                        </li>
                    </template>
                    <li class="page-item filler" v-if="c_page < (pages.length - (pagenumbermargin+1))">...</li>

                    <li class="page-item last">
                        <button class="page link" v-if="c_page != pages.length" @click="c_page = pages.length">
                            {{ pages.length }}
                        </button>
                    </li>
                    <li class="page-item next">
                        <button
                            class="page link iconlink ico-arrow-basic-important"
                            v-if="c_page != pages.length"
                            @click="c_page++"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </div>
        `
    };
});

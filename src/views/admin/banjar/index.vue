<template>
    <Header/>
    <div class="container w-full mx-auto pt-20">

        <div class="w-full p-3 mb-12 md:mt-12" >
                    <!--Table Card-->
                    <a class="mb-8 bg-blue-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105
                    hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center" href="/admin/banjar/create">
                                <i class="fa fa-user-plus"></i> &nbsp;Tambah Banjar
                    </a>

                    <div class="bg-white border rounded shadow">
                        <div class="border-b p-3">
                            <h5 class="font-bold uppercase text-gray-600">Banjar</h5>
                        </div>
                        <div class="p-5">
                            <table class="w-full p-5 text-gray-700">
                                <thead>
                                    <tr>
                                        <th class="text-left text-blue-700">No</th>
                                        <th class="text-left text-blue-900">Banjar</th>
                                        <th class="text-left text-blue-900">Alamat</th>
                                        <th class="text-left text-blue-900">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(banjar,index) in banjars" :key="banjar.id" class="border-b-2 pb-2">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ banjar.nama }}</td>
                                        <td>{{ banjar.alamat }}</td>
                                        <td>
                                            <router-link tag="button" to="#" class="bg-yellow-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                                <i class="fa fa-pen"></i> 
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--/table Card-->
                </div>
    </div>
</template>

<script>
import Header from '@/components/templates/header.vue';
import axios from 'axios';

export default {
    name: "IndexBanjar",
    components: {
        Header,
    },
    data() {
        return {
            banjars: null,
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8001/api/banjar/')
            .then(response => (this.banjars = response.data))
            .catch(function (error) {
                console.log(error);
            })
        }
    };
</script>